'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch(props) {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

        _this.state = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0

            //buttons
        };_this.start = _this.start.bind(_this);
        _this.stop = _this.stop.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.saveResult = _this.saveResult.bind(_this);
        _this.deleteResult = _this.deleteResult.bind(_this);

        _this.format = _this.format.bind(_this);
        _this.getMiliseconds = _this.getMiliseconds.bind(_this);
        _this.getSeconds = _this.getSeconds.bind(_this);
        _this.getMinutes = _this.getMinutes.bind(_this);
        _this.pad0 = _this.pad0.bind(_this);
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'getMinutes',
        value: function getMinutes() {
            if (this.state.seconds >= 60) {
                this.state.seconds = 0;
                this.setState({
                    minutes: this.state.minutes += 1
                });
            } else {
                return this.state.minutes;
            }
        }
    }, {
        key: 'getSeconds',
        value: function getSeconds() {
            if (this.state.miliseconds >= 100) {
                this.state.miliseconds = 0;
                this.setState({
                    seconds: this.state.seconds += 1
                });
            } else {
                return this.state.seconds;
            }
        }
    }, {
        key: 'getMiliseconds',
        value: function getMiliseconds() {
            return this.state.miliseconds;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState({
                miliseconds: this.state.miliseconds = 0,
                seconds: this.state.seconds = 0,
                minutes: this.state.minutes = 0
            });
        }
    }, {
        key: 'format',
        value: function format(minuts, seconds, miliseconds) {
            return this.pad0(minuts) + ':' + this.pad0(seconds) + ':' + this.pad0(miliseconds);
        }
    }, {
        key: 'pad0',
        value: function pad0(value) {
            if (value.toString().length < 2) {
                return value = '0' + value;
            } else {
                return value;
            }
        }
    }, {
        key: 'start',
        value: function start() {
            var _this2 = this;

            this.watch = setInterval(function () {
                _this2.setState({
                    miliseconds: _this2.state.miliseconds + 1
                });
            }, 10);
        }
    }, {
        key: 'stop',
        value: function stop() {
            clearInterval(this.watch);
        }
    }, {
        key: 'saveResult',
        value: function saveResult() {
            var list = document.createElement('li');
            var wynik = document.querySelector('.stopwatch').textContent;
            list.innerHTML = wynik;
            document.getElementById('results').appendChild(list);
        }
    }, {
        key: 'deleteResult',
        value: function deleteResult() {
            var appendlist = document.getElementsByTagName('li');
            var results = document.getElementById('results');
            results.removeChild(appendlist[0]);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'timer' },
                React.createElement(
                    'nav',
                    { className: 'controls' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', onClick: this.start },
                        'Start'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', onClick: this.stop },
                        'Pause'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', onClick: this.reset },
                        'Reset'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', onClick: this.saveResult },
                        'Save results'
                    ),
                    React.createElement(
                        'a',
                        { href: '#', className: 'button', onClick: this.deleteResult },
                        'Delete result'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'stopwatch' },
                    this.format(this.getMinutes(), this.getSeconds(), this.getMiliseconds())
                ),
                React.createElement('ol', { type: '1', id: 'results' })
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));
