// const menuItemsData = [
//     {
//       id: 1,
//       title: "Home",
//       url: "/",
//       subMenuItems: null,
//       depth: 0
//     },
//     {
//       id: 2,
//       title: "Products",
//       url: "/products",
//       depth: 0,
//       subMenuItems: [
//         {
//           id: 21,
//           title: "Product 1",
//           url: "/products/product1",
//           subMenuItems: null,
//           depth: 1
//         },
//         {
//           id: 22,
//           title: "Product 2",
//           url: "/products/product2",
//           subMenuItems: null,
//           depth: 1
//         },
//         {
//           id: 23,
//           title: "Product 3",
//           url: "/products/product3",
//           depth: 1,
//           subMenuItems: [
//             {
//               id: 231,
//               title: "Subproduct 1",
//               url: "/products/product3/subproduct1",
//               subMenuItems: null,
//               depth: 2,
//             },
//             {
//               id: 232,
//               title: "Subproduct 2",
//               url: "/products/product3/subproduct2",
//               depth: 2,
//               subMenuItems: [
//                 {
//                   id: 2321,
//                   title: "Sub-subproduct 1",
//                   url: "/products/product3/subproduct2/subsubproduct1",
//                   subMenuItems: null,
//                   depth: 3,
//                 },
//                 {
//                   id: 2322,
//                   title: "Sub-subproduct 2",
//                   url: "/products/product3/subproduct2/subsubproduct2",
//                   subMenuItems: null,
//                   depth: 3
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: "About",
//       url: "/about",
//       subMenuItems: null,
//       depth: 0
//     },
//     {
//       id: 4,
//       title: "Contact",
//       url: "/about",
//       subMenuItems: null,
//       depth: 0
//     },
//     {
//       id: 5,
//       title: "Disclaimner",
//       url: "/about",
//       subMenuItems: null,
//       depth: 0
//     }
//   ];

//   export default menuItemsData;

const menuItemsData = [
    {
        "id": "pcat_01GYM7WTRNH0ZG2EC4E8S635WF",
        "created_at": "2023-04-22T10:24:26.871Z",
        "updated_at": "2023-04-22T10:24:26.871Z",
        "name": "Women",
        "description": "",
        "handle": "women",
        "is_active": true,
        "is_internal": false,
        "parent_category_id": null,
        "rank": 1,
        "parent_category": null,
        "category_children": [
            {
                "id": "pcat_01GYM7WTRS53C9E13CCHE329G1",
                "created_at": "2023-04-22T10:24:26.871Z",
                "updated_at": "2023-04-22T10:24:26.871Z",
                "name": "Clothing",
                "description": "",
                "handle": "women/clothing",
                "is_active": true,
                "is_internal": false,
                "parent_category_id": "pcat_01GYM7WTRNH0ZG2EC4E8S635WF",
                "rank": 0,
                "category_children": [
                    {
                        "id": "pcat_01GYM7WTRY6478H29EHXZ6JDBG",
                        "created_at": "2023-04-22T10:24:26.871Z",
                        "updated_at": "2023-04-22T10:24:26.871Z",
                        "name": "Shirts",
                        "description": "",
                        "handle": "women/clothing/shirts",
                        "is_active": true,
                        "is_internal": false,
                        "parent_category_id": "pcat_01GYM7WTRS53C9E13CCHE329G1",
                        "rank": 0,
                        "category_children": [
                            {
                                "id": "pcat_01GYM7WTS5WMYJZ1S1NWBQMGGV",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Casual Shirts",
                                "description": "",
                                "handle": "women/clothing/shirts/casual-shirts",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTRY6478H29EHXZ6JDBG",
                                "rank": 0,
                                "category_children": []
                            },
                            {
                                "id": "pcat_01GYM7WTSA87K0JTDE64F6M34A",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Business Shirts",
                                "description": "",
                                "handle": "women/clothing/shirts/business-shirts",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTRY6478H29EHXZ6JDBG",
                                "rank": 1,
                                "category_children": []
                            }
                        ]
                    },
                    {
                        "id": "pcat_01GYM7WTT82FSZMVJKE9Y95QVB",
                        "created_at": "2023-04-22T10:24:26.871Z",
                        "updated_at": "2023-04-22T10:24:26.871Z",
                        "name": "Jeans",
                        "description": "",
                        "handle": "women/clothing/jeans",
                        "is_active": true,
                        "is_internal": false,
                        "parent_category_id": "pcat_01GYM7WTRS53C9E13CCHE329G1",
                        "rank": 2,
                        "category_children": [
                            {
                                "id": "pcat_01GYM7WTTD0XRT82DF7F8GMPJ7",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Skinny fit",
                                "description": "",
                                "handle": "women/clothing/jeans/skinny-fit",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTT82FSZMVJKE9Y95QVB",
                                "rank": 0,
                                "category_children": []
                            },
                            {
                                "id": "pcat_01GYM7WTTJ6EFHHKPP77GGGZ3E",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Slim fit",
                                "description": "",
                                "handle": "women/clothing/jeans/slim-fit",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTT82FSZMVJKE9Y95QVB",
                                "rank": 1,
                                "category_children": []
                            },
                            {
                                "id": "pcat_01GYM7WTTQ2CEVKJ0BP9X8GTRP",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Straight leg",
                                "description": "",
                                "handle": "women/clothing/jeans/straight-leg",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTT82FSZMVJKE9Y95QVB",
                                "rank": 2,
                                "category_children": []
                            },
                            {
                                "id": "pcat_01GYM7WTTXPAGAW2G7T3WBEKBE",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Tapered fit",
                                "description": "",
                                "handle": "women/clothing/jeans/tapered-fit",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTT82FSZMVJKE9Y95QVB",
                                "rank": 3,
                                "category_children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "pcat_01GYM7WTV3VMFBEACY0DTJZ8NB",
                "created_at": "2023-04-22T10:24:26.871Z",
                "updated_at": "2023-04-22T10:24:26.871Z",
                "name": "Shoes",
                "description": "",
                "handle": "women/shoes",
                "is_active": true,
                "is_internal": false,
                "parent_category_id": "pcat_01GYM7WTRNH0ZG2EC4E8S635WF",
                "rank": 1,
                "category_children": [
                    {
                        "id": "pcat_01GYM7WTV73PJXQ62N45E469HD",
                        "created_at": "2023-04-22T10:24:26.871Z",
                        "updated_at": "2023-04-22T10:24:26.871Z",
                        "name": "Sports shoes",
                        "description": "",
                        "handle": "women/shoes/sports-shoes",
                        "is_active": true,
                        "is_internal": false,
                        "parent_category_id": "pcat_01GYM7WTV3VMFBEACY0DTJZ8NB",
                        "rank": 0,
                        "category_children": [
                        
                        ]
                    },
                    {
                        "id": "pcat_01GYM7WTW9QBEPKZDG8ZPB4E5A",
                        "created_at": "2023-04-22T10:24:26.871Z",
                        "updated_at": "2023-04-22T10:24:26.871Z",
                        "name": "Business shoes",
                        "description": "",
                        "handle": "women/shoes/business-shoes",
                        "is_active": true,
                        "is_internal": false,
                        "parent_category_id": "pcat_01GYM7WTV3VMFBEACY0DTJZ8NB",
                        "rank": 1,
                        "category_children": []
                    },
                    {
                        "id": "pcat_01GYM7WTWFH7VAJME61P06AN7A",
                        "created_at": "2023-04-22T10:24:26.871Z",
                        "updated_at": "2023-04-22T10:24:26.871Z",
                        "name": "Boots",
                        "description": "",
                        "handle": "women/shoes/boots",
                        "is_active": true,
                        "is_internal": false,
                        "parent_category_id": "pcat_01GYM7WTV3VMFBEACY0DTJZ8NB",
                        "rank": 2,
                        "category_children": [
                            {
                                "id": "pcat_01GYM7WTWM0YKVM0N8J5WXAGGN",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Lace-up boots",
                                "description": "",
                                "handle": "women/shoes/boots/lace-up-boots",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTWFH7VAJME61P06AN7A",
                                "rank": 0,
                                "category_children": []
                            },
                            {
                                "id": "pcat_01GYM7WTWS11N22ZE1RHRJK8KZ",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Ankle boots",
                                "description": "",
                                "handle": "women/shoes/boots/ankle-boots",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTWFH7VAJME61P06AN7A",
                                "rank": 1,
                                "category_children": []
                            },
                            {
                                "id": "pcat_01GYM7WTWZQMB0W6V54K7A2ZFF",
                                "created_at": "2023-04-22T10:24:26.871Z",
                                "updated_at": "2023-04-22T10:24:26.871Z",
                                "name": "Winter Boots",
                                "description": "",
                                "handle": "women/shoes/boots/winter-boots",
                                "is_active": true,
                                "is_internal": false,
                                "parent_category_id": "pcat_01GYM7WTWFH7VAJME61P06AN7A",
                                "rank": 2,
                                "category_children": []
                            }
                        ]
                    },
                    {
                        "id": "pcat_01GYM7WTX3ABH5539R91B00S07",
                        "created_at": "2023-04-22T10:24:26.871Z",
                        "updated_at": "2023-04-22T10:24:26.871Z",
                        "name": "Slippers",
                        "description": "",
                        "handle": "women/shoes/slippers",
                        "is_active": true,
                        "is_internal": false,
                        "parent_category_id": "pcat_01GYM7WTV3VMFBEACY0DTJZ8NB",
                        "rank": 3,
                        "category_children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "pcat_01GYM82Y551SG0723GCEBBP8MK",
        "created_at": "2023-04-22T10:27:50.050Z",
        "updated_at": "2023-04-22T10:27:50.050Z",
        "name": "Handicraft",
        "description": "Handicraft",
        "handle": "handicraft",
        "is_active": true,
        "is_internal": false,
        "parent_category_id": null,
        "rank": 2,
        "parent_category": null,
        "category_children": [
            {
                "id": "pcat_01GYM83F8XP5W1RXHM7BEZ27D9",
                "created_at": "2023-04-22T10:28:07.578Z",
                "updated_at": "2023-04-22T10:28:07.578Z",
                "name": "Metal",
                "description": "Metal",
                "handle": "metal",
                "is_active": true,
                "is_internal": false,
                "parent_category_id": "pcat_01GYM82Y551SG0723GCEBBP8MK",
                "rank": 0,
                "category_children": [
                    {
                        "id": "pcat_01GYM846S3M91PRJ29JCS091CF",
                        "created_at": "2023-04-22T10:28:31.648Z",
                        "updated_at": "2023-04-22T10:28:31.648Z",
                        "name": "Dhokra Metal",
                        "description": "Dhokra Metal",
                        "handle": "dhokra-metal",
                        "is_active": true,
                        "is_internal": false,
                        "parent_category_id": "pcat_01GYM83F8XP5W1RXHM7BEZ27D9",
                        "rank": 0,
                        "category_children": []
                    }
                ]
            }
        ]
    }
]
  
  export default menuItemsData;
  