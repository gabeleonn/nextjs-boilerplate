module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier",
    "better-styled-components",
    "react-hooks"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-extraneous-dependencies": ["error", {"peerDependencies": true}],
    "better-styled-components/sort-declarations-alphabetically": 2
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/explicit-member-accessibility": "off",
    // "jsx-a11y/anchor-is-valid": "off",
    // "jsx-a11y/no-static-element-interactions": "off",
    // "no-nested-ternary": "off",
    // "no-shadow": "off",
    // "no-else-return": "off",
    // "react/destructuring-assignment": "off",
    // "react/jsx-filename-extension": 0,
    // "react/jsx-props-no-spreading": "off",
    // "react/prop-types": "off",
    // "react/require-default-props": "off",
    // "space-before-function-paren": "off",
    // "camelcase": "off",
    // "no-param-reassign": [
    //   2,
    //   {
    //     "props": false
    //   }
    // ],
    // "no-underscore-dangle": 0
  },
  "settings": {
    "import/resolver": {
      "typescript": {},
      "aliases": {
        "map": [
          [
            "@/src",
            "./src"
          ],
          [
            "@/pages",
            "./src/pages"
          ],
          [
            "@/components",
            "./src/components"
          ],
          [
            "@/styles",
            "./src/styles"
          ],
          [
            "@/interfaces",
            "./src/types/interfaces"
          ],
          [
            "@/enums",
            "./src/types/enums"
          ]
        ]
      }
    }
  }
}

