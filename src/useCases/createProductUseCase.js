class CreateProductUseCase {
    constructor( productRepository ) {
        this.productRepository = productRepository;
    }

    async execute(product) {
    
        return await this.productRepository.create(product);
    }
}

export default CreateProductUseCase;