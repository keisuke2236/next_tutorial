import styles from './layout.module.css';
import rorensu from './rorensu.module.css';

// children はレイアウトコンポーネントの呼び出し元の囲った部分 yeld 的なものだな
// css の適応はclass名をつけて対応させるのではなく、 layout module の 指定 css class を適応させている
export default function Layout({ children }) {
  return <div>
    <div className={rorensu.container}>{children}</div>
    <div className={styles.container}>{children}</div>
  </div>;
}