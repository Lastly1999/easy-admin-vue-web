import elementUi from "element-ui"

const setupElementUi = (vueInstance) => {
	vueInstance.use(elementUi)
	// return vueInstance style css
	return import('element-ui/lib/theme-chalk/index.css')
}

export default setupElementUi