
class Api::StudiosController < ApplicationController

    def index
        @studios = Studio.all
        render :index
    end

    def show
        @studio = Studio.find(params[:id])
        if @studio
            render :show
        else
            render json: ["No studio"]
        end
    end

    def create
        @studio = Studio.new(studio_params)
        if @studio.save
            render :show
        else
            render json: @movie.errors.full_messages, status: 422
        end
    end

    def update
        @movie = Movie.find(params[:id])
        if @movie.update(movie_params)
            render :show
        else
            render json: @studio.errors.full_messages, status: 422
        end
    end

    def destroy
        @studio = Studio.find(params[:id])

        if @studio.destroy
            render :show
        else
            render json: @studio.errors.full_messages, status: 422
        end
    end

    private

    def studio_params
        params.require(:studio).permit(:title, :description, :photo, :photoUrl)
    end
end