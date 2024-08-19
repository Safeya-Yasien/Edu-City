import styles from "./styles.module.scss";

const { widgetTitle } = styles;

type TTitle = {
  title: string;
};

const WidgetTitle = ({ title }: TTitle) => {
  return <h3 className={widgetTitle}>{title}</h3>;
};

export default WidgetTitle;
