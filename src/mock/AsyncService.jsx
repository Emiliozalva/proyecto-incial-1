


const products = [
    {
        id: '1',
        name: "NVIDIA GeForce RTX 4060",
        price: 350000,
        category: "componentes",
        stock: 10,
        description: "Tarjeta gráfica de última generación para gaming en 1080p.",
        img: "https://http2.mlstatic.com/D_NQ_NP_965038-MLA70233639537_062023-O.webp"
    },
    {
        id: '2',
        name: "AMD Ryzen 7 5700X",
        price: 210000,
        category: "componentes",
        stock: 15,
        description: "Procesador de 8 núcleos ideal para multitasking y gaming.",
        img: "https://http2.mlstatic.com/D_NQ_NP_624329-MLA50066223595_052022-O.webp"
    },
    {
        id: '3',
        name: "Teclado Mecánico Redragon",
        price: 45000,
        category: "perifericos",
        stock: 25,
        description: "Teclado RGB con switches azules y diseño compacto.",
        img: "https://http2.mlstatic.com/D_NQ_NP_723338-MLA45749257766_042021-O.webp"
    },
    {
        id: '4',
        name: "Mouse Logitech G502",
        price: 60000,
        category: "perifericos",
        stock: 12,
        description: "El mouse gamer más vendido con sensor HERO 25K.",
        img: "https://http2.mlstatic.com/D_NQ_NP_685813-MLA46614488390_072021-O.webp"
    },
    {
        id: '5',
        name: "Monitor Samsung 24 FHD",
        price: 180000,
        category: "monitores",
        stock: 8,
        description: "Monitor IPS 75Hz con bordes ultradelgados.",
        img: "https://http2.mlstatic.com/D_NQ_NP_994993-MLA46223067838_052021-O.webp"
    },
    {
        id: '6',
        name: "Memoria RAM 16GB Fury",
        price: 55000,
        category: "componentes",
        stock: 30,
        description: "DDR4 3200MHz con disipador de calor.",
        img: "https://http2.mlstatic.com/D_NQ_NP_647631-MLA48016462828_102021-O.webp"
    }
];

// 1. Obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

// 2. Obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 1000);
    });
};

// 3. Obtener un producto por ID
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 1000);
    });
};

// 4. NUEVA FUNCION: Obtener productos por Nombre (Buscador)
export const getProductsByName = (searchTerm) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFound = products.filter(prod => 
                prod.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            resolve(productsFound);
        }, 1000);
    });
};