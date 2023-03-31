import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import pkg from './package.json';

export default [
	{
		input: 'src/js/egodesign.modal.js',
		output: {
            name: 'egodesign.modal',
			file: pkg.browser,
			format: 'umd',
            exports: 'default'
		},
		plugins: [
            terser(),
			resolve(),
			commonjs(),
            scss({
                fileNaame: 'css/egodesign.modal.min.css',
                outputStyle: "compressed"
            })
		]
	},
	{
		input: 'src/js/egodesign.modal.js',
		external: ['ms'],
        plugins: [
            terser(),
            scss({
                fileName: 'css/egodesign.modal.min.css',
                outputStyle: "compressed"
            })
		],
		output: [
			{ 
                name: 'egodesign.modal',
                file: pkg.main, 
                format: 'cjs',
                exports: 'default'
            },
			{ 
                name: 'egodesign.modal',
                file: pkg.module, 
                format: 'es',
                exports: 'default'
            }
		]
	}
];