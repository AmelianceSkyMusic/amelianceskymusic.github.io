import type { SvgIconProps } from '~/ameliance-ui/components/SvgIcon';
import { SvgIcon } from '~/ameliance-ui/components/SvgIcon';

export function VideoPlayerIcon(props: SvgIconProps) {
	return (
		<SvgIcon
			stroke="none"
			{...props}
		>
			<path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM9.47885 6.80665C8.81248 6.44317 8 6.92548 8 7.68454V16.3155C8 17.0745 8.81248 17.5568 9.47885 17.1934L17.3905 12.8779C18.0854 12.4989 18.0854 11.5011 17.3905 11.1221L9.47885 6.80665Z" />
		</SvgIcon>
	);
}
