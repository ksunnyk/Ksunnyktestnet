
            this.rowClick = function(event){
                grid.on('rowclick', function(grid, rowIndex, e) {
                    var r = grid.getStore().getAt(rowIndex);
                    event(r, rowIndex);
	            });
            }            

            this.height = function (height) {
                grid.setHeight(height);
            }

            this.appendTo = function (parent) {
                $(parent).append(this.template);

                store.load({
                    params: { rnd: Math.random() },
                    callback: function () {
                        $(_poll).trigger({ type: "poll", event: "complete" });
                    } .bind(this)
                });

                grid.render(Ext.select(this.id, true));
            }
        }
        Grid.inherits(App.VisualElement);
