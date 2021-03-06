const customQueries = {
  xs: '(max-width: 500px)',
  s: '(max-width: 600px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1200px)',
  l: '(max-width: 1536px)',
  xl: '(max-width: 1926px)',
  xxl: '(min-width: 1930px)',
  isLoad: '(min-width: 320px)',
};

module.exports = {
  siteMetadata: {
    title: 'Modular House',
  },
  // flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `models3d`,
        path: `${__dirname}/src/assets/models3d`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'modularh_user',
          password: 'modularhouse',
          database: 'modularh_db',
        },
        queries: [
          {
            statement: 'SELECT * FROM modx_site_tmplvar_contentvalues',
            idFieldName: 'id',
            name: 'value',
          },
          {
            statement: 'SELECT * FROM modx_site_content',
            idFieldName: 'id',
            name: 'parent',
          },
          // all houses
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id,modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value, modx_site_content.id AS contentID, modx_site_content.alias
            FROM modx_site_tmplvar_contentvalues
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
            JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id
            JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id
            WHERE modx_site_templates.templatename = "Дом"`,
            idFieldName: 'id',
            name: 'Houses',
          },
          // all modules
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id , modx_site_tmplvars.name AS parameterName, modx_site_tmplvar_contentvalues.value AS parameterValue, modx_site_content.id AS contentId, modx_site_content.parent AS parentId, modx_site_content.alias AS moduleName, modx_site_content.pagetitle AS contentName
            FROM modx_site_tmplvar_contentvalues
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
            JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id
            JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id
            WHERE modx_site_templates.templatename = "Модуль"
            ORDER BY modx_site_content.pagetitle`,
            idFieldName: 'id',
            name: 'Modules',
          },
          // rooms
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id , modx_site_tmplvars.name AS parameterName, modx_site_tmplvar_contentvalues.value AS parameterValue, modx_site_content.id AS contentId, modx_site_content.parent AS parentId, modx_site_content.alias AS houseName
            FROM modx_site_tmplvar_contentvalues
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
            JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id
            JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id
            WHERE modx_site_templates.templatename = "Комната"`,
            idFieldName: 'id',
            name: 'Rooms',
          },
          // main page slider
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id AS id, modx_site_tmplvars.name AS parameterName, modx_site_tmplvar_contentvalues.value AS parameterValue
            FROM modx_site_tmplvar_contentvalues
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
            JOIN modx_categories ON modx_categories.id = modx_site_tmplvars.category
            WHERE modx_categories.category = "Параметры Главной"`,
            idFieldName: 'id',
            name: 'MainPage',
          },
          {
            statement: `
            SELECT modx_site_tmplvar_contentvalues.id AS id, modx_site_tmplvars.name AS parameterName, modx_site_tmplvar_contentvalues.value AS parameterValue,
            modx_site_content.alias AS house, modx_site_content.id AS contentId
            FROM modx_site_tmplvar_contentvalues
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
            JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id
            JOIN modx_categories ON modx_categories.id = modx_site_tmplvars.category
            WHERE modx_categories.category = "Параметры Опции"`,
            idFieldName: 'id',
            name: 'Options',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          quality: 70,
          breakpoints: [750, 1366, 1920],
        },
        // Set to false to allow builds to continue on image errors
        failOnError: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: customQueries,
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
  ],
};
