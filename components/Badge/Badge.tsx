interface Props {
  name: string;
  height: number;
  style: string;
}

const Badge = ({ name, height, style }: Props) => {
  const badgeColorDict = {
    react: "#61DAFB",
    redux: "#764ABC",
    MUI: "#007FFF",
    styledcomponents: "#DB7093",
    firebase: "#FFCA28",
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    html5: "#E34F26",
    sass: "#CC6699",
    stripe: "#008CDD",
    tailwindcss: "#06B6D4",
    nodejs: "#339933",
    express: "#000000",
    mysql: "#4479A1",
    amazonS3: "#FF9900",
  };

  const badgeColor = (str: string) => {
    let color: string;
    for (let key in badgeColorDict) {
      if (str.toLowerCase().replace(/[. ]/, "") == key.toLowerCase()) {
        color = badgeColorDict[key].replace("#", "");
      }
    }
    return color;
  };

  return (
    <img
      height={height}
      src={`https://img.shields.io/badge/${name}-${badgeColor(
        name
      )}?style=${style}&logo=${name}&logoColor=white`}
      alt=""
      style={{ margin: "0 3px 3px 0" }}
    />
  );
};

export default Badge;
