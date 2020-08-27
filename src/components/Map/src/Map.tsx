import React from 'react';
import './Map.scss';

export const Map: React.FC<{}> = () => {
	return (
		<div className="location__map">
			<iframe
				title="Map to Highworth Physiotherapy Clinic"
				// eslint-disable-next-line max-len
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.1503644021743!2d-1.710772826512844!3d51.630509387569745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487148625caf79a5%3A0xfd8b60c3a023fce!2sHighworth%20Physiotherapy%20Clinic!5e0!3m2!1sen!2suk!4v1593645052277!5m2!1sen!2suk"
				allowFullScreen
				frameBorder={0}
				aria-hidden={false}
				// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
				tabIndex={0}
			/>
		</div>
	);
};
