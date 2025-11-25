import { createRoot } from "react-dom/client";
import logo from "url:./assets/logo.png";
import cart from "url:./assets/cart.png";
// import biriyani from "url:./assets/biriyani.jpg";

const resData = [
  {
    info: {
      id: "651011",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/8ffc3f24-e540-4aba-aefc-af2f6bfc4085_651011.JPG",
      locality: "New Market Area",
      areaName: "New Market Area",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "721",
      avgRatingString: "4.4",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "285",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/pizza-hut-new-market-area-rest651011",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "830564",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/24/e6b9b2a8-34c8-4e21-ad14-c06dcee37c95_830564.JPG",
      locality: "Gariahat",
      areaName: "Rashbehari Avenue",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/olio-the-wood-fired-pizzeria-gariahat-rashbehari-avenue-rest830564",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4483",
      name: "Peter Cat",
      cloudinaryImageId: "omyzo5b0zfihbge4zt2l",
      locality: "Park Street",
      areaName: "Park Street",
      costForTwo: "₹1000 for two",
      cuisines: ["Continental"],
      avgRating: 4.6,
      parentId: "157457",
      avgRatingString: "4.6",
      totalRatingsString: "21K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "39K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/peter-cat-park-street-rest4483",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "630353",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/ebdbb4c3-6b18-4074-a578-1a68fddd67d8_630353.JPG",
      locality: "Espalande",
      areaName: "S.N.Banerjee Road",
      costForTwo: "₹400 for two",
      cuisines: ["Fast Food", "Burgers", "Rolls & Wraps"],
      avgRating: 4.5,
      parentId: "547",
      avgRatingString: "4.5",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/kfc-espalande-s-n-banerjee-road-rest630353",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "8912",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/62df7565-a4a9-4007-8153-bfe000d91f88_8912.jpg",
      locality: "Park Street",
      areaName: "Park Street",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "24K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 07:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/subway-park-street-rest8912",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "407661",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/3079cc60-8ee1-4306-8390-fc436f9dc9d5_407661.jpg",
      locality: "New Market",
      areaName: "Esplanade",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "19K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "2.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/burger-king-new-market-esplanade-rest407661",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "341240",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "tx4nkcrymnxl4skumwm9",
      locality: "Camac Street",
      areaName: "Wood street",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "250",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/la-pinoz-pizza-camac-street-wood-street-rest341240",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "26476",
      name: "Blue Poppy - Thakali",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/11/cd001802-248f-4ef1-9a4a-38e5f60c31e3_26476 (1).jpg",
      locality: "Camac Street",
      areaName: "Camac Street",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "Nepalese", "Tibetan"],
      avgRating: 4.6,
      parentId: "588783",
      avgRatingString: "4.6",
      totalRatingsString: "6.7K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "4.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/blue-poppy-thakali-camac-street-rest26476",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "466935",
      name: "Peter Hu?",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/f9cb9cc9-5a58-4254-b290-2cc56ee17f73_466935 (1).jpg",
      locality: "Park Street",
      areaName: "Park Street",
      costForTwo: "₹1200 for two",
      cuisines: ["Asian", "Chinese", "Pan-Asian", "Thai", "Japanese"],
      avgRating: 4.7,
      parentId: "280345",
      avgRatingString: "4.7",
      totalRatingsString: "5.0K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "2.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/peter-hu-park-street-rest466935",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4484",
      name: "Mocambo",
      cloudinaryImageId: "syvxzreznmd3nmnwelwp",
      locality: "Park Street",
      areaName: "Park Street",
      costForTwo: "₹1500 for two",
      cuisines: ["Biryani", "Continental", "Italian"],
      avgRating: 4.6,
      parentId: "137494",
      avgRatingString: "4.6",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "17K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/mocambo-park-street-rest4484",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4620",
      name: "Oudh 1590",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/2cbf7516-ef3a-4e04-b050-080468f392bf_4620.jpg",
      locality: "Kalighat",
      areaName: "Kalighat",
      costForTwo: "₹1000 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Awadhi",
        "Kebabs",
        "Lucknowi",
      ],
      avgRating: 4.5,
      parentId: "686",
      avgRatingString: "4.5",
      totalRatingsString: "29K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹125",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "13K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/oudh-1590-kalighat-rest4620",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750986",
      name: "Wow! Chicken By Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/1fde79eb-faca-4998-abed-0d79bc526f23_750986.JPG",
      locality: "Dharmatala",
      areaName: "New Market Area",
      costForTwo: "₹400 for two",
      cuisines: ["Burger", "Biryani", "American", "fastfood"],
      avgRating: 4.1,
      parentId: "268366",
      avgRatingString: "4.1",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/wow-chicken-by-wow-momo-dharmatala-new-market-area-rest750986",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23945",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/197a8d56-90e5-4001-a2fc-4d41dce3171a_23945.JPG",
      locality: "AJC Bose Road",
      areaName: "AJC Bose Road",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "27K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "2.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/dominos-pizza-ajc-bose-road-rest23945",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639521",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
      locality: "Nalin Sengupta Sarani",
      areaName: "NEW MARKET",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Barbecue"],
      avgRating: 4.3,
      parentId: "351013",
      avgRatingString: "4.3",
      totalRatingsString: "229",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/dum-safar-biryani-nalin-sengupta-sarani-new-market-rest639521",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "240365",
      name: "Wow! China Diner",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/6e5c23b7-3e23-4a11-9e05-b8ff92ae7654_240365.JPG",
      locality: "Park Street",
      areaName: "Park Street",
      costForTwo: "₹400 for two",
      cuisines: ["Chinese", "Asian", "fastfood", "Snacks", "Beverages"],
      avgRating: 4.3,
      parentId: "486832",
      avgRatingString: "4.3",
      totalRatingsString: "6.3K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/wow-china-diner-park-street-rest240365",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4430",
      name: "Shiraz Golden Restaurant",
      cloudinaryImageId: "f5cd921a909842adf479ffc7fedd1968",
      locality: "Park Circus",
      areaName: "Park Circus",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Mughlai", "Indian", "Kebabs", "Tandoor"],
      avgRating: 4.6,
      parentId: "5569",
      avgRatingString: "4.6",
      totalRatingsString: "74K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹95",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "8.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/shiraz-golden-restaurant-park-circus-rest4430",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "18360",
      name: "Little Pleasures",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/3/94bee217-0d86-4a76-8017-d729d1eff03e_18360 (1).jpg",
      locality: "New Market",
      areaName: "Elgin",
      costForTwo: "₹300 for two",
      cuisines: [
        "Bakery",
        "Cakes",
        "Desserts",
        "Ice Cream",
        "Healthy Food",
        "Snacks",
      ],
      avgRating: 4.7,
      parentId: "18665",
      avgRatingString: "4.7",
      totalRatingsString: "5.8K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-25 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "318",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/little-pleasures-new-market-elgin-rest18360",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "29706",
      name: "Chowman",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/c5ec8a07-043b-4ece-bfb1-d9063ff46534_29706.jpg",
      locality: "Ho Chi Minh Sarani",
      areaName: "Ho Chi Minh Sarani",
      costForTwo: "₹700 for two",
      cuisines: ["Chinese", "Asian", "Thai", "Oriental", "Burmese", "Tibetan"],
      avgRating: 4.6,
      parentId: "266",
      avgRatingString: "4.6",
      totalRatingsString: "27K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "6.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/chowman-ho-chi-minh-sarani-rest29706",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750985",
      name: "Wow! China",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/9e5db93e-5027-4df0-b296-ef0331fc9939_750985.JPG",
      locality: "Dharmatala",
      areaName: "New Market Area",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Asian", "fastfood", "Beverages", "Snacks"],
      avgRating: 4.3,
      parentId: "226836",
      avgRatingString: "4.3",
      totalRatingsString: "975",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/wow-china-dharmatala-new-market-area-rest750985",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "836578",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/e9e43722-a131-4728-bf1b-e82e56573c21_836578.JPG",
      locality: "Golaghata VIP road",
      areaName: "Salt Lake",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.7,
      parentId: "3818",
      avgRatingString: "4.7",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-26 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e7a351-632e-49bd-b954-27c0793624fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/bakingo-golaghata-vip-road-salt-lake-rest836578",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const {name , avgRating , sla , cuisines , areaName , costForTwo , cloudinaryImageId} = props.restaurantInfo.info
  return (
    <div className="res-card">
      <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId} />
      <div className="res-card-info">
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h3>{avgRating + '.' + sla.slaString}</h3>
        <p>{cuisines.join(', ')}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
      </div>
      <div className="res-Container">
        {
            resData.map(resObj => <RestaurantCard key={resObj.info.id} restaurantInfo={resObj}/>)
        }
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <div className="logoContainer">
          <img src={logo} />
        </div>
        <div className="foodyBuddy">
          <h1>Foody Buddy</h1>
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li className="cartContainer">
              <img src={cart} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
createRoot(document.getElementById("root")).render(<AppLayout />);
