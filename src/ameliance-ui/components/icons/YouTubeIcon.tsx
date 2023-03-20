import type { SvgIconProps } from '../SvgIcon';
import { SvgIcon } from '../SvgIcon';

export function YouTubeIcon(props: SvgIconProps) {
	return (
		<SvgIcon
			size="custom"
			width="24"
			height="24"
			viewBox="0 0 40 40"
			stroke="none"
			{...props}
		>
			<path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM32.4668 13.9539C32.1787 12.859 31.3143 11.9947 30.2194 11.6921C28.2458 11.1591 20.3224 11.1591 20.3224 11.1591C20.3224 11.1591 12.399 11.1591 10.4109 11.6921C9.31608 11.9803 8.46612 12.8446 8.16359 13.9539C7.64497 15.942 7.64497 20.0909 7.64497 20.0909C7.64497 20.0909 7.64497 24.2399 8.17799 26.228C8.46612 27.3228 9.33049 28.1872 10.4254 28.4897C12.399 29.0227 20.3224 29.0227 20.3224 29.0227C20.3224 29.0227 28.2458 29.0227 30.2338 28.4897C31.3287 28.2016 32.1786 27.3372 32.4812 26.228C32.9998 24.2399 32.9998 20.0909 32.9998 20.0909C32.9998 20.0909 32.9998 15.942 32.4668 13.9539ZM17.7289 23.8653L24.3558 20.0909L17.7289 16.3165V23.8653Z" />
		</SvgIcon>
	);
}