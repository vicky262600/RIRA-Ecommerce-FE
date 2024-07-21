module.exports = {
    env: {
      browser: true, // Defines global variables available in the browser
      es2021: true,  // Enables ES2021 features
    },
    extends: [
      'eslint:recommended', // Use the recommended rules from ESLint
      'plugin:react/recommended', // Use the recommended rules from the React plugin
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
      ecmaVersion: 12, // Use ES2021 features
      sourceType: 'module', // Allow the use of imports
    },
    plugins: [
      'react', // Use the React plugin for linting React code
    ],
    rules: {
      // General rules
      'no-unused-vars': 'warn', // Warn about unused variables
      'no-console': 'warn', // Warn about console logs (optional)
      'no-debugger': 'warn', // Warn about debugger statements (optional)
      'indent': ['warn', 2], // Enforce 2-space indentation
      'quotes': ['warn', 'single'], // Enforce single quotes for strings
      'semi': ['warn', 'always'], // Enforce the use of semicolons
  
      // React-specific rules
      'react/prop-types': 'off', // Disable the prop-types rule (optional)
      'react/react-in-jsx-scope': 'off', // Disable the rule for React 17 and newer (optional)
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    overrides: [
      {
        files: ['*.js', '*.jsx'], // Apply these settings to .js and .jsx files
      },
    ],
  };
  