module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          // cloudinary folder upload options are not working | about 2 weeks away
          // https://github.com/strapi/strapi/pull/13018
          // here is another: https://github.com/strapi/strapi/issues/12809
          // folder: env("CLOUDINARY_FOLDER"),
        },
        delete: {},
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        event: {
          field: "slug",
          references: "name",
        },
      },
      slugifyOptions: {
        customReplacements: [["'", ""]],
      },
    },
  },
});

// module.exports = ({ env }) => ({
//   // ...
//   upload: {
//     provider: "cloudinary",
//     providerOptions: {
//       cloud_name: env("CLOUDINARY_NAME"),
//       api_key: env("CLOUDINARY_KEY"),
//       api_secret: env("CLOUDINARY_SECRET"),
//     },
//     actionOptions: {
//       upload: {
//         folder: env("CLOUDINARY_FOLDER"),
//       },
//       delete: {},
//     },
//   },
//   // ...
// });
