from flask import Flask

app = Flask(__name__)

# @app.route('/')
# def home():
#     return 'Hello, World!'
# if __name__ == '__main__':
#     app.run(debug=True)
@app.route('/')
@app.route('/home')
def home():
    return 'hello world!'

@app.route('/user')
def user():
    return 'hello, User!'

if __name__ == '__name__':
    app.run(debug=True)