import Heading from "./components/heading/Heading";
import KiwiImage from "./components/kiwi/KiwiImage";
import _ from 'lodash'

const heading = new Heading()
const kiwiImage = new KiwiImage()

heading.render(_.upperFirst('Kiwi pics'))
kiwiImage.render()