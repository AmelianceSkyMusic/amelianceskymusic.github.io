import type { SvgIconProps } from '~/ameliance-ui/components/SvgIcon';
import { SvgIcon } from '~/ameliance-ui/components/SvgIcon';

export function DeployIcon(props: SvgIconProps) {
	return (
		<SvgIcon
			stroke="none"
			{...props}
		>
			<path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V6H0V2ZM0 8H24V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V8ZM11 3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5C14 4.32843 13.3284 5 12.5 5C11.6716 5 11 4.32843 11 3.5ZM16.5 2C15.6716 2 15 2.67157 15 3.5C15 4.32843 15.6716 5 16.5 5C17.3284 5 18 4.32843 18 3.5C18 2.67157 17.3284 2 16.5 2ZM20.5 2C19.6716 2 19 2.67157 19 3.5C19 4.32843 19.6716 5 20.5 5C21.3284 5 22 4.32843 22 3.5C22 2.67157 21.3284 2 20.5 2Z" />
		</SvgIcon>
	);
}
