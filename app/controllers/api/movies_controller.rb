
class Api::MoviesController < ApplicationController

    def index
        debugger
        @movies = Movie.all
        render :index
    end

    def show
        debugger
        @movie = Movie.find(params[:id])
        if @movie
            render :show
        else
            render json: ["No movie"]
        end
    end

    def create
        @movie = Movie.new(movie_params)
        if @movie.save
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
            render json: @movie.errors.full_messages, status: 422
        end
    end

    def destroy
        @movie = Movie.find(params[:id])

        if @movie.destroy
            render :show
        else
            render json: @movie.errors.full_messages, status: 422
        end
    end

    private

    def movie_params
        params.require(:movie).permit(:title, :description, :rating, :year, :photo)
    end
end