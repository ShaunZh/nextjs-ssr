/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-03-17 14:06:01
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-25 15:38:56
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    Aliplayer: true,
  },
  rules: {
    // 'no-useless-constructor': 'off',
    // '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
