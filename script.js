body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f9e3e3;
  font-family: 'Arial', sans-serif;
  flex-direction: column;
}

.container {
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: #d32f2f;
}

.buttons {
  margin-top: 20px;
}

.yes-button {
  width: 20%;
  font-size: 90%;
  padding: 10px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
}
.yes-button1 {
  font-size: 90%;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.no-button {
  font-size: 1.5em;
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.gif_container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 20px;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff5f5;
  font-family: 'Arial', sans-serif;;
}

.container {
  text-align: center;
  background-color: #ffebee;
  padding: 40px;
  border-radius: 20px;
  border: 3px solid #ff6b81;
  box-shadow: 0 8px 20px rgba(255, 107, 129, 0.3);
  max-width: 400px;
  width: 100%;
}

.header_text {
  font-size: 2.5em;
  color: #ff6b81;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(255, 107, 129, 0.2);
}

.gif_container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  font-size: 20px;
  border: 2px solid #ff6b81;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #ff6b81;
  color: white;
  font-family: 'Indie Flower', cursive;
  box-shadow: 0 4px 10px rgba(255, 107, 129, 0.3);
}

.btn:hover {
  background-color: white;
  color: #ff6b81;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 107, 129, 0.4);
}

#noButton {
  background-color: #ff4757;
  border-color: #ff4757;
}

#noButton:hover {
  background-color: white;
  color: #ff4757;
}

@keyframes wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

.wiggle {
  animation: wiggle 0.5s ease-in-out;
}

@keyframes heartFade {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.5); }
}

.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  animation: heartFade 1s ease-out forwards;
  background-color: #ff6b81;
  border-radius: 50%;
}

@media only screen and (max-width: 500px) {
  .container {
      text-align: center;
      background-color: #ffebee;
      padding: 40px;
      border-radius: 20px;
      border: 3px solid #ff6b81;
      box-shadow: 0 8px 20px rgba(255, 107, 129, 0.3);
      width: 60%;
    align-content: center;
    position: fixed;
  }
  .header_text {
    font-size: 2em;
    color: #ff6b81;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(255, 107, 129, 0.2);
  }
}
