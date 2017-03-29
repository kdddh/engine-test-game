var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var canvas = document.getElementById("app");
var stage = engine.run(canvas);
engine.Ticker.getInstance().register(function (deltaTime) {
    //console.log(deltaTime);
    button.y = button.y + deltaTime / 10;
});
//第二层容器
var panel = new engine.DisplayObjectContainer();
panel.x = 120;
panel.y = 50;
panel.alpha = 0.5;
//按钮
var button = new engine.Button();
button.x = 10;
button.y = 30;
button.text = "点我";
button.color = "#FF0000";
button.size = 20;
button.enable = true;
button.addEventListener("onclick", function () {
    button.text = "欧尼酱";
}, this, false);
var word2 = new engine.TextField();
word2.text = "第二层容器";
word2.color = "#0000FF";
word2.size = 30;
var list = new engine.DisplayObjectContainer();
list.addEventListener("onmousemove", function (e) {
    var dy = engine.currentY - engine.lastY;
    list.y = list.y + dy;
}, this, false);
//帧动画
var idleData = {
    name: "111",
    frames: [
        { "image": "playerIdle1.jpg" },
        { "image": "playerIdle1.jpg" },
        { "image": "playerIdle1.jpg" },
        { "image": "playerIdle1.jpg" },
        { "image": "playerIdle1.jpg" },
        { "image": "playerIdle1.jpg" },
        { "image": "playerIdle2.jpg" },
        { "image": "playerIdle2.jpg" },
        { "image": "playerIdle2.jpg" },
        { "image": "playerIdle2.jpg" },
        { "image": "playerIdle2.jpg" },
        { "image": "playerIdle2.jpg" }
    ]
};
var moveData = {
    name: "111",
    frames: [
        { "image": "playerMove1.jpg" },
        { "image": "playerMove1.jpg" },
        { "image": "playerMove1.jpg" },
        { "image": "playerMove1.jpg" },
        { "image": "playerMove1.jpg" },
        { "image": "playerMove1.jpg" },
        { "image": "playerMove2.jpg" },
        { "image": "playerMove2.jpg" },
        { "image": "playerMove2.jpg" },
        { "image": "playerMove2.jpg" },
        { "image": "playerMove2.jpg" },
        { "image": "playerMove2.jpg" }
    ]
};
var player = new engine.MovieClip(idleData);
player.image.src = "player1.jpg";
player.image.width = 128;
player.image.height = 128;
var playerTween = new engine.Tween(player, moveData, idleData);
stage.addEventListener("onclick", function (e) {
}, this, false);
//图片
var avater = new engine.Bitmap();
avater.image.src = "avater.jpg";
//加载完图片资源
avater.image.onload = function () {
    stage.addChild(new MyMap());
    stage.addChild(player);
};
//vertexShaderSourceCode : 顶点着色器，决定形状  模型-决定数据
//fragmentShaderSourceCode ： 片元着色器，决定颜色   材质-决定数据
var config = [
    { x: 0, y: 0, walkable: true, image: "road.jpg" },
    { x: 0, y: 1, walkable: true, image: "road.jpg" },
    { x: 0, y: 2, walkable: true, image: "road.jpg" },
    { x: 0, y: 3, walkable: true, image: "road.jpg" },
    { x: 0, y: 4, walkable: true, image: "road.jpg" },
    { x: 0, y: 5, walkable: true, image: "road.jpg" },
    { x: 0, y: 6, walkable: true, image: "road.jpg" },
    { x: 0, y: 7, walkable: true, image: "road.jpg" },
    { x: 1, y: 0, walkable: true, image: "road.jpg" },
    { x: 1, y: 1, walkable: true, image: "road.jpg" },
    { x: 1, y: 2, walkable: true, image: "road.jpg" },
    { x: 1, y: 3, walkable: true, image: "road.jpg" },
    { x: 1, y: 4, walkable: true, image: "road.jpg" },
    { x: 1, y: 5, walkable: false, image: "noRoad.jpg" },
    { x: 1, y: 6, walkable: true, image: "road.jpg" },
    { x: 1, y: 7, walkable: true, image: "road.jpg" },
    { x: 2, y: 0, walkable: false, image: "noRoad.jpg" },
    { x: 2, y: 1, walkable: false, image: "noRoad.jpg" },
    { x: 2, y: 2, walkable: false, image: "noRoad.jpg" },
    { x: 2, y: 3, walkable: false, image: "noRoad.jpg" },
    { x: 2, y: 4, walkable: true, image: "road.jpg" },
    { x: 2, y: 5, walkable: false, image: "noRoad.jpg" },
    { x: 2, y: 6, walkable: true, image: "road.jpg" },
    { x: 2, y: 7, walkable: true, image: "road.jpg" },
    { x: 3, y: 0, walkable: true, image: "road.jpg" },
    { x: 3, y: 1, walkable: true, image: "road.jpg" },
    { x: 3, y: 2, walkable: true, image: "road.jpg" },
    { x: 3, y: 3, walkable: false, image: "noRoad.jpg" },
    { x: 3, y: 4, walkable: false, image: "noRoad.jpg" },
    { x: 3, y: 5, walkable: false, image: "noRoad.jpg" },
    { x: 3, y: 6, walkable: true, image: "road.jpg" },
    { x: 3, y: 7, walkable: true, image: "road.jpg" },
    { x: 4, y: 0, walkable: true, image: "road.jpg" },
    { x: 4, y: 1, walkable: true, image: "road.jpg" },
    { x: 4, y: 2, walkable: true, image: "road.jpg" },
    { x: 4, y: 3, walkable: true, image: "road.jpg" },
    { x: 4, y: 4, walkable: true, image: "road.jpg" },
    { x: 4, y: 5, walkable: true, image: "road.jpg" },
    { x: 4, y: 6, walkable: true, image: "road.jpg" },
    { x: 4, y: 7, walkable: true, image: "road.jpg" }
];
var MyMap = (function (_super) {
    __extends(MyMap, _super);
    function MyMap() {
        var _this = _super.call(this) || this;
        //生成地图
        for (var i = 0; i < config.length; i++) {
            var mapNode = new MapNode(config[i].x, config[i].y, config[i].image);
            _this.addChild(mapNode);
        }
        var aStar = new AStar();
        var grid = new Grid(5, 8);
        for (var i = 0; i < config.length; i++) {
            grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
        }
        _this.addEventListener("onclick", function (e) {
            grid.setStartNode(Math.floor(player.x / MyMap.SIZE), Math.floor(player.y / MyMap.SIZE));
            grid.setEndNode(Math.floor(e.offsetX / MyMap.SIZE), Math.floor(e.offsetY / MyMap.SIZE));
            var stepMoveInterval;
            //有路
            if (aStar.findPath(grid)) {
                console.log("自动寻路开始");
                var path = aStar._path;
                var i = 0;
                stepMoveInterval = setInterval(function () {
                    if (!player.isMove) {
                        playerTween.moveTo(path[i].x, path[i].y);
                    }
                    else {
                        playerTween.removeTween();
                    }
                    if (player.x == path[path.length - 1].x && player.y == path[path.length - 1].y) {
                        clearInterval(stepMoveInterval);
                    }
                    console.log("playerX:" + player.x);
                    console.log("playerY:" + player.y);
                    console.log("X:" + path[i].x);
                    console.log("Y:" + path[i].y);
                    if (i < path.length - 1 && player.x == path[i].x && player.y == path[i].y) {
                        i++;
                    }
                    console.log("i:" + i);
                }, 500);
            }
            else {
                console.log("自动寻路结束");
            }
        }, _this, false);
        return _this;
    }
    return MyMap;
}(engine.DisplayObjectContainer));
//width:5*8,height:128*8
MyMap.SIZE = 128;
//每一个网格
var MapNode = (function (_super) {
    __extends(MapNode, _super);
    function MapNode(girdX, girdY, imageSrc) {
        var _this = _super.call(this) || this;
        _this.costMultiplier = 1.0;
        _this.girdX = girdX;
        _this.girdY = girdY;
        _this.x = girdX * MyMap.SIZE;
        _this.y = girdY * MyMap.SIZE;
        _this.image.width = 128; //128 * 5 = 640
        _this.image.height = 128; //128 * 8 = 1024
        _this.image.src = imageSrc;
        return _this;
    }
    return MapNode;
}(engine.Bitmap));
//整个地图的所有网格，控制所有的节点
var Grid = (function () {
    function Grid(numCols, numRows) {
        this._nodes = [];
        this._numCols = numCols;
        this._numRows = numRows;
        this._nodes = new Array();
        var configAmount = 0;
        for (var i = 0; i < this._numCols; i++) {
            this._nodes[i] = new Array();
            for (var j = 0; j < this._numRows; j++) {
                this._nodes[i][j] = new MapNode(config[configAmount].x, config[configAmount].y, config[configAmount].image);
                configAmount++;
            }
        }
    }
    Grid.prototype.getNode = function (x, y) {
        return this._nodes[x][y];
    };
    Grid.prototype.setEndNode = function (x, y) {
        this._endNode = this._nodes[x][y];
    };
    Grid.prototype.setStartNode = function (x, y) {
        this._startNode = this._nodes[x][y];
    };
    Grid.prototype.setWalkable = function (x, y, value) {
        this._nodes[x][y].walkable = value;
    };
    Grid.prototype.getNumCols = function () {
        return this._numCols;
    };
    Grid.prototype.getNumRows = function () {
        return this._numRows;
    };
    return Grid;
}());
var AStar = (function () {
    function AStar() {
        //待查列表
        this._openList = [];
        //已查列表
        this._closedList = [];
        //最终路径
        this._path = [];
        //设置启发函数
        this._heuristic = this.diagonal;
        this._straightCost = 1.0;
        this._diagCost = Math.SQRT2;
    }
    AStar.prototype.findPath = function (grid) {
        this._grid = grid;
        this._openList = new Array();
        this._closedList = new Array();
        this._startNode = this._grid._startNode;
        this._endNode = this._grid._endNode;
        this._startNode.g = 0;
        this._startNode.h = this._heuristic(this._startNode);
        this._startNode.f = this._startNode.g + this._startNode.h;
        return this.search();
    };
    //一直到找到路为止
    AStar.prototype.search = function () {
        var currentNode = this._startNode;
        while (currentNode != this._endNode) {
            //保证节点不在地图外
            var startX = Math.max(0, currentNode.girdX - 1);
            var endX = Math.min(this._grid._numCols - 1, currentNode.girdX + 1);
            var startY = Math.max(0, currentNode.girdY - 1);
            var endY = Math.min(this._grid._numRows - 1, currentNode.girdY + 1);
            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    var test = this._grid._nodes[i][j];
                    //检测节点为当前节点或不可通过时，无需计算代价
                    if (test == currentNode || !test.walkable || !this._grid._nodes[currentNode.girdX][test.girdY].walkable || !this._grid._nodes[test.girdX][currentNode.girdY].walkable) {
                        continue;
                    }
                    var cost = this._straightCost;
                    if (!((currentNode.girdX == test.girdX) || (currentNode.girdY == test.girdY))) {
                        cost = this._diagCost;
                    }
                    var g = currentNode.g + cost;
                    var h = this._heuristic(test);
                    var f = g + h;
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parentNode = currentNode;
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parentNode = currentNode;
                        this._openList.push(test);
                    }
                }
            }
            this._closedList.push(currentNode);
            //待查列表
            if (this._openList.length == 0) {
                return false;
            }
            this._openList.sort(function (a, b) {
                return a.f - b.f;
            });
            currentNode = this._openList.shift();
        }
        this.buildPath();
        return true;
    };
    AStar.prototype.isOpen = function (node) {
        for (var i = 0; i < this._openList.length; i++) {
            if (this._openList[i] == node) {
                return true;
            }
        }
        return false;
    };
    AStar.prototype.isClosed = function (node) {
        for (var i = 0; i < this._closedList.length; i++) {
            if (this._closedList[i] == node) {
                return true;
            }
        }
        return false;
    };
    AStar.prototype.buildPath = function () {
        this._path = new Array();
        var node = this._endNode;
        this._path.push(node);
        while (node != this._startNode) {
            node = node.parentNode;
            this._path.unshift(node);
        }
    };
    AStar.prototype.diagonal = function (node) {
        var dx = Math.abs(this._endNode.girdX - node.girdX);
        var dy = Math.abs(this._endNode.girdY - node.girdY);
        var diag = Math.min(dx, dy);
        var straight = dx + dy;
        return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
    };
    return AStar;
}());
