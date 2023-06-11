import React, { memo } from "react";
import Modal from "react-native-modal";
import LottieView from "lottie-react-native";

import lottie from "~/theme/lottie";
import themeVar from "~/theme/theme-variables";

const Spinner = ({ full_screen, ...props }) => {
	return (
		<>
			{!!full_screen ? (
				<Modal isVisible={true} backdropColor="rgba(255,255,255,0.8)">
					<Indicator {...props} />
				</Modal>
			) : (
				<Indicator {...props} />
			)}
		</>
	);
};

const Indicator = ({ large, small, micro, size, primary, success, warning, danger, color, black, white }) => {
	const spinner_size = !!large ? 46 : !!small ? 26 : !!micro ? 16 : !!size ? size : 34;
	// const spinner_size = !!large ? 56 : !!small ? 28 : !!micro ? 18 : !!size ? size : 40;
	const spinner_color = !!success
		? themeVar.success.default
		: !!danger
		? themeVar.danger.default
		: !!warning
		? themeVar.warning.default
		: !!black
		? themeVar.black
		: !!white
		? themeVar.light
		: !!color
		? color
		: themeVar.primary.default;
	return (
		<LottieView
			loop={true}
			autoPlay={true}
			source={lottie.spinner.src}
			style={{ width: spinner_size, height: spinner_size }}
			colorFilters={[{ keypath: "Shape Layer 1", color: spinner_color }]}
		/>
	);
};

export default memo(Spinner);
