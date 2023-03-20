import type { SvgIconProps } from '../SvgIcon';
import { SvgIcon } from '../SvgIcon';

export function GithubIcon(props: SvgIconProps) {
	return (
		<SvgIcon
			size="custom"
			width="24"
			height="24"
			viewBox="0 0 40 40"
			stroke="none"
			{...props}
		>
			<path d="M26.2102 39.0179L26.0817 39.0428C23.7598 39.4921 24.4862 31.554 24.4862 31.2744C24.4862 29.5948 23.9116 28.4972 23.2634 27.9411C27.2744 27.4954 31.4807 25.9742 31.4807 19.0608C31.4807 17.0976 30.7845 15.488 29.6317 14.2321C29.8158 13.7753 30.4346 11.9484 29.4512 9.46962C28.4457 9.1455 26.7956 9.76059 24.5046 11.3149C23.0681 10.9171 21.5285 10.7146 20 10.7109C18.4678 10.7182 16.9282 10.9171 15.4954 11.3149C13.2044 9.76059 11.5543 9.1455 10.5451 9.46962C9.56538 11.9484 10.1842 13.779 10.3683 14.2321C9.21547 15.4917 8.51565 17.0976 8.51565 19.0608C8.51565 25.9595 12.7182 27.5028 16.7146 27.9558C16.1989 28.4052 15.7348 29.2007 15.5727 30.361C14.5488 30.8214 11.9411 31.6169 10.3352 28.8656C9.70166 27.7127 8.78085 27.0939 7.57643 27.0092C6.40516 26.9945 6.36465 27.3591 7.4512 28.1031C8.23942 28.4715 8.9024 29.3481 9.4512 30.7367C10.1547 33.0718 12.1768 33.8748 15.5138 33.1492C15.5174 33.8875 15.948 39.4055 13.9559 39.0477L13.8144 39.0223L13.6781 38.9769C5.7322 36.3338 0 28.8387 0 20C0 8.95437 8.95436 0 20 0C31.0456 0 40 8.95437 40 20V20.0037C40 28.8385 34.2718 36.3293 26.3344 38.9765L26.2102 39.0179Z" />
		</SvgIcon>
	);
}
