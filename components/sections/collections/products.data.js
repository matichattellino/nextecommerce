const products = [
    {
      "product": {
        "id": 1,
        "name": "Face & Body Roller",
        "description": "Enrich your morning and evening beauty ritual and to help reduce the appearance of puffiness and wrinkles",
        "price": "18.00",
        "permalink": "face-bodyroller",
        "category_id": "categories[2].id",
        "img": '/images/product/1.png',
      },
      "categories": [
        {
          "slug": "body-products",
          "name": "Body Products",
          "id": 2,
        }
    ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "200ml",
              "price": "0.00"
            },
            {
              "description": "500ml",
              "price": "34.00"
            }
          ]
        }
      ]
    },
    {
      "product": {
        "id": 2,
        "name": "Cure Scrub Kit",
        "description": "Cleanse and rejuvenate your skin with bamboo bristle scrubbing brushes.",
        "price": "51.00",
        "permalink": "cure-scrub",
        "category_id": "categories[2].id",
        "img": '/images/product/2.png',
      },
      "categories": [
        {
          "slug": "body-products",
          "name": "Body Products",
          "id": 2,
        }
    ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "100ml kit",
              "price": "0.00"
            },
            {
              "description": "500ml kit",
              "price": "100.00"
            }
          ]
        }
      ]
    },
    {
      "product": {
        "id": 3,
        "name": "Molecule Body Oil",
        "description": "For a silky smooth finish, the Molecule Body Oil is a perfect addition for your post shower treatment.",
        "price": "23.00",
        "permalink": "molecule-body",
        "category_id": "categories[2].id",
        "img": '/images/product/3.png',
      },
      "categories": [
        {
          "slug": "body-products",
          "name": "Body Products",
          "id": 2,
        }
    ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "100ml",
              "price": "0.00"
            },
            {
              "description": "500ml",
              "price": "40.00"
            }
          ]
        }
      ]
    },
    {
      "product": {
        "name": "Lip Fantastic",
        "id": 4,
        "description": "A limited-edition, nourishing lip gel to top off your look and feel fantastic.",
        "price": "24.00",
        "permalink": "lip-fantastic",
        "category_id": "categories[0].id",
        "img": '/images/product/4.png',
      },
      "categories": [
          {
            "id": 0,
            "slug": "facial-products",
            "name": "Facial Products",
          }
      ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "30ml",
              "price": "0.00"
            },
            {
              "description": "50ml",
              "price": "35.00"
            }
          ]
        }
      ]
    },
    {
      "product": {
        "id": 5,
        "name": "Hair Beauty Bath",
        "description": "Made for your hair, a bath foam that brings your hair back to life.",
        "price": "25.00",
        "permalink": "hair-beauty",
        "category_id": "categories[1].id",
        "img": '/images/product/5.png',
      },
      "categories": [
        {
          "slug": "hair-products",
          "name": "Hair Products",
          "id": 1,
        }
    ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "100ml",
              "price": "0.00"
            },
            {
              "description": "300ml",
              "price": "18.00"
            }
          ]
        }
      ]
    },
    {
      "product": {
        "name": "Shampoo & Conditioner Set",
        "id": 6,
        "description": "Weightless, color safe, and cleansing Verb Ghost shampoo and conditioner set.",
        "price": "65.00",
        "permalink": "shampoo-conditioner",
        "category_id": "categories[1].id",
        "img": '/images/product/6.png',
      },
      "categories": [
        {
          "slug": "hair-products",
          "name": "Hair Products",
          "id": 1,
        }
    ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "500ml kit",
              "price": "0.00"
            },
            {
              "description": "750ml kit",
              "price": "25.00"
            }
          ]
        }
      ]
    },
    {
      "product": {
        "id": 7,
        "name": "Rose Hair & Body Oil",
        "description": "A multitasking oil for hair and body that’s perfect for those on the go.",
        "price": "38.00",
        "permalink": "rose-body",
        "category_id": "categories[1].id",
        "img": '/images/product/7.png',
      },
      "categories": [
        {
          "slug": "hair-products",
          "name": "Hair Products",
          "id": 1,
        }
    ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "50ml",
              "price": "0.00"
            },
            {
              "description": "75ml",
              "price": "60.00"
            }
          ]
        }
      ]
    },
    {
      "product": {
        "name": "Complexion Cream",
        "id": 8,
        "description": "Anti-aging complexion cream for medium to dry skin. Nourish your face with a natural vitamin burst for that perfectly balanced glow.",
        "price": "32.00",
        "permalink": "complexion-cream",
        "category_id": "categories[0].id",
        "img": '/images/product/8.jpg',
      },
      "categories": [
        {
          "slug": "facial-products",
          "name": "Facial Products",
          "id": 0,
        }
    ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "100ml",
              "price": "0.00"
            },
            {
              "description": "500ml",
              "price": "57.00"
            }
          ]
        }
      ]
    },
    {
      "product": {
        "name": "Eye Purity Gels",
        "id": 9,
        "description": "Treat your skin with active pore enzymes that replenish sun damaged skin.",
        "price": "18.00",
        "permalink": "eye-gels",
        "category_id": "categories[0].id",
        "img": '/images/product/9.jpg',
      },
      "categories": [
        {
          "slug": "facial-products",
          "name": "Facial Products",
          "id": 0,
        }
    ],
      "variant": [
        {
          "name": "Size",
          "options": [
            {
              "description": "100ml",
              "price": "0.00"
            },
            {
              "description": "500ml",
              "price": "32.00"
            }
          ]
        }
      ]
    }
  ]

  export default products;