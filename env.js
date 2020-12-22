import pinyin from './pinyin';

export default {
    title: '实用工具',
    domain:
        process.env.NODE_ENV === 'development'
            ? 'dev.miku.tools:3000'
            : 'miku.tools',
    description: '一个轻量的工具集合',
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://dev.miku.tools:3000'
            : 'http://tool.xcdao.com',
    apiUrl:
        process.env.NODE_ENV === 'development'
            ? 'http://dev.miku.tools:3001'
            : 'https://api.miku.tools',
    pinyin: pinyin,
    development: process.env.NODE_ENV === 'development',
    axios:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3001'
            : 'https://api.miku.tools'
};
