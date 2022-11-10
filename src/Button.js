export default function Button({
    title,
    backgroundColor = "blue",
    color = "black",
    rounded = false,
    onClick,
  }) {
    if (!onClick) {
      throw new Error("no onClick function provided");
    }
    const styles = {
      backgroundColor,
      color,
    };
    if (rounded) {
      styles.borderRadius = "40%";
    }
  
    return (
      <button style={styles} onClick={onClick}>
        {title}
      </button>
    );
  }