class DeleteProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(productId) {

        return await this.productRepository.deleteProduct(id);
    }
}

export default DeleteProductUseCase;