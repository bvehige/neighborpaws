class DogsController < ApplicationController
  before_action :set_dog, only: [:show, :update, :destroy]

  # GET /dogs
  def index
    if params[:neighborhood_id] && @neighborhood = Neighborhood.find_by_id(params[:neighborhood_id])
      @dogs = @neighborhood.dogs 
    else
      @dogs = []
    end

    render json: @dogs
  end

  # GET /dogs/1
  def show
    render json: @dog
  end

  # POST /dogs
  def create
    @dog = Dog.new(dog_params)

    if @dog.save
      render json: @dog, status: :created, location: @dog
    else
      render json: @dog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dogs/1
  def update
    if @dog.update(dog_params)
      render json: @dog
    else
      render json: @dog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dogs/1
  def destroy
    @dog.destroy
    render json: {message: "#{@dog.name} was removed from the neighborhood."}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dog
      @dog = Dog.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dog_params
      params.require(:dog).permit(:name, :breed, :owner, :address, :comment, :img, :neighborhood_id)
    end
end
