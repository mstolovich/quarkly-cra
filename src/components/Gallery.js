import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize";
const customHtml = `
	<style>
    @keyframes bgscroll {
  from {background-position: 0px 0px;}
  to {background-position: 7680px 0;}
}

.logo-gallery {
    background-color: transparent;
    background-image: url(https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ceab5a25abdf6b8e55086d5_1.png);
    background-position: 0px 0px;
    background-repeat: repeat-x;
    background-size: contain;
    width:100%;
    height:130px;
    opacity:60%;
      
    animation-name: bgscroll;
    animation-duration: 200s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
  </style>
  <div class='logo-gallery'></div>
`;

const LogoGallery = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(LogoGallery)({
	name: "LogoGallery",
	normalize: true,
	mixins: true
});