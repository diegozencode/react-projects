import Instructions from '../Instructions/Instructions';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
// Aray of objects
const emojis = [
  {
    emoji: "😀",
    name: "grinning face",
  },
  {
    emoji: "🎉",
    name: "party popper",
  },
  {
    emoji: "💃",
    name: "woman dancing",
  },
];

function App() {
  const greeting = "greeting";
  const displayAction = true;
  return (
    <div className="container">
      <h1 id={greeting}>Hello world</h1>
      {displayAction && <p>I am writting JSX</p>}
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))  // end of map
        }
      </ul>
    </div>
  );
}

export default App;
