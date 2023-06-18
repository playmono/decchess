import Utilities from "../Utilities";
import Battlefield from "./Battlefied";
import MainMenu from "./MainMenu";
import MainSettings from "./MainSettings";

export default class SignUp extends Phaser.Scene {
    public static Name = "SignUp";

    public preload(): void {
        this.load.html('login', 'assets/html/login.html');
    }

    public create(): void {
        Utilities.LogSceneMethodEntry("SignUp", "create");

        const signupText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY / 4, "Sign Up");
        signupText
            .setFontFamily("monospace")
            .setFontSize(40)
            .setFill("#fff")
            .setAlign("center")
            .setOrigin(0.5);

        const element = this.add.dom(this.cameras.main.centerX, this.cameras.main.centerY).createFromCache('login');
        element.addListener('click');
        element.on('click', async function (event) {
            if (event.target.name === 'button') {
                try {
                    const data = {
                        username: this.getChildByName('usernameField').value,
                        password: this.getChildByName('passwordField').value
                    };
                    const url = process.env.APP_PROTOCOL + '://' + process.env.APP_URL + ':' + process.env.APP_PORT;
                    const response = await fetch(`${url}/sign-up`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    });
                    if (response.status !== 200) {
                        const responseData = await response.json();
                        throw new Error(responseData.errorMessage);
                    } else {
                        this.getChildByName('usernameField').value = '';
                        this.getChildByName('passwordField').value = '';
                        this.getChildByID('error').innerText = 'User created succesfully'
                    }
                } catch (error) {
                    this.getChildByID('error').innerText = error.message;
                }
            }
        });

        // Add a button to return to the main menu.
        const backText = this.add.text(this.cameras.main.centerX, this.cameras.main.height - 50, "Go Back");
        backText
            .setOrigin(0.5)
            .setFontFamily("monospace").setFontSize(25).setFill("#fff")
            .setInteractive();
        backText.on("pointerdown", () => { this.scene.start(MainMenu.Name); }, this);
    }

    public update(): void {
        // Update logic, as needed.
    }
}
