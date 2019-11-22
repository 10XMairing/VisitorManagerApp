import { Container } from 'typedi'
import LoggerInstance from "./logger"


export default () => {
    // for now just load the logger

    Container.set("logger", LoggerInstance);
    LoggerInstance.info("logger set into DI container")

}



