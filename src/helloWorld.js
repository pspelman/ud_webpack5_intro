import addImage from "./addImage";
import HelloWorldButton from "./components/helloWorld/HelloWorldButton";
import Heading from "./components/heading/Heading";
import _ from 'lodash'


const helloWorldButton = new HelloWorldButton()

const heading = new Heading()

heading.render(_.upperFirst('helloWorld'))
helloWorldButton.render()