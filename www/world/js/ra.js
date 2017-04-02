var World = {
    loaded: false,

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {

        var location1 = new AR.RelativeLocation(null, 5, 5, 0);
        var location2 = new AR.RelativeLocation(null, 1, 3, 0);
        var location3 = new AR.RelativeLocation(null, 2, 4, 0);
        var location4 = new AR.RelativeLocation(null, 4, 3, 0);

        var imgOne = new AR.ImageResource("assets/link.png");
        var overlayOne = new AR.ImageDrawable(imgOne, 1, {
            onLoaded: this.worldLoadedFn,
            scale: {
                x: 7,
                y: 7,
                z: 7
            }
        });

        var obj1 = new AR.GeoObject(location1, {
            drawables: {
                cam : [overlayOne]
            }
        });

        var obj2 = new AR.GeoObject(location2, {
            drawables: {
                cam : [overlayOne]
            }
        });

        var obj3 = new AR.GeoObject(location3, {
            drawables: {
                cam : [overlayOne]
            }
        });

        var obj4 = new AR.GeoObject(location4, {
            drawables: {
                cam : [overlayOne]
            }
        });

        worldLoaded: function worldLoadedFn(){
            World.loaded = true;
        }
    }

};

World.init();