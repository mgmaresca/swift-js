/*
The MIT License

Copyright (c) 2012 Universidad Politecnica de Madrid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// JStack Swift Module
// ------------------

JSTACK.Swift = (function (JS, undefined) {
    "use strict";
    var params, check, configure, getcontainerlist, createcontainer, deletecontainer, getobjectlist,
        copyobject, uploadobject, downloadobject, deleteobject;
    // This modules stores the `url` to which it will send every
    // request.
    params = {
        url : undefined,
        state : undefined,
        endpointType : "publicURL"
    };

    // Private functions
    // -----------------

    // Function `check` internally confirms that Keystone module is
    // authenticated and it has the URL of the Volume service.
    check = function (region) {
        if (JS.Keystone !== undefined && JS.Keystone.params.currentstate === JS.Keystone.STATES.AUTHENTICATED) {
            var service = JS.Keystone.getservice("volume");
            if (service) {
                params.url = JSTACK.Comm.getEndpoint(service, region, params.endpointType);
                return true;
            }
            return false;
        }
        return false;
    };
    // Public functions
    // ----------------
    //

    // This function sets the endpoint type for making requests to Glance.
    // It could take one of the following values:
    // * "adminURL"
    // * "internalURL"
    // * "publicURL"
    // You can use this function to change the default endpointURL, which is publicURL.
    configure = function (endpointType) {
        if (endpointType === "adminURL" || endpointType === "internalURL" || endpointType === "publicURL") {
            params.endpointType = endpointType;
        }
    };


    // **Volume Operations**

    //
    // View a list of simple Volume entities. In
    // [Requesting a List of Volumes](http://api.openstack.org/)
    // there is more information about the JSON object that is returned.
    
    // EN CDMI NO SABEMOS CUAL ES EL PARAMETRO a !!!
    getcontainerlist = function (callback, error, region) {
        var url, onOk, onError;
        if (!check(region)) {
            return;
        }
        url = params.url + '/volumes';
        if (detailed !== undefined && detailed) {
            url += '/detail';
        }

        onOk = function (result) {
            if (callback !== undefined) {
                callback(result);
            }
        };
        onError = function (message) {
            if (error !== undefined) {
                error(message);
            }
        };

        JS.Comm.get(url, JS.Keystone.params.token, onOk, onError);
    };
    // Create a Container.
    // Arguments in this function are:
    //
    // a. Mandatory
    //
    // * The `size` of volume in GB
    //
    // b. Optional
    //
    // * The `name` of the volume
    //
    // * The `description` of the volume
    //
    createcontainer = function (name, callback, error, region) {
        var url, onOk, onError, data;
        if (!check(region)) {
            return;
        }
        url = params.url + "/" + name;
        data = {
            metadata: {}
        };

        onOk = function (result) {
            if (callback !== undefined) {
                callback(result);
            }
        };
        onError = function (message) {
            if (error !== undefined) {
                error(message);
            }
        };

        JS.Comm.put(url, data, JSTACK.Keystone.params.token, onOK, onError, "container");
    };
    // Delete a Container entitiy. In
    // [Deleting a Volume](http://api.openstack.org/)
    // there is more information about the JSON object that is returned.
    deletecontainer = function (name, callback, error, region) {
        var url, onOk, onError;
        if (!check(region)) {
            return;
        }
        url = params.url + '/' + name;

        onOk = function (result) {
            if (callback !== undefined) {
                callback(result);
            }
        };
        onError = function (message) {
            if (error !== undefined) {
                error(message);
            }
        };

        JS.Comm.del(url, JS.Keystone.params.token, onOk, onError, "container");
    };
    // Get a Volume entitiy. In
    // [Retrieving a Volume](http://api.openstack.org/)
    // there is more information about the JSON object that is returned.
    getobjectlist = function (name, callback, error, region) {
        var url, onOk, onError;
        if (!check(region)) {
            return;
        }
        url = params.url + '/' + name;

        onOk = function (result) {
            if (callback !== undefined) {
                callback(result);
            }
        };
        onError = function (message) {
            if (error !== undefined) {
                error(message);
            }
        };

        JS.Comm.get(url, JS.Keystone.params.token, onOk, onError, "object");
    };
    // **Snapshot Operations**

    //
    // View a list of simple Snapshot entities. In
    // [Requesting a List of Snapshots](http://api.openstack.org/)
    // there is more information about the JSON object that is returned.
    copyobject = function (name, object, targetContainer, targetObject, callback, error, region) {
        var url, onOk, onError;
        if (!check(region)) {
            return;
        }
        url = params.url + '/' + targetContainer + '/' + ;
        if (detailed !== undefined && detailed) {
            url += '/detail';
        }

        onOk = function (result) {
            if (callback !== undefined) {
                callback(result);
            }
        };
        onError = function (message) {
            if (error !== undefined) {
                error(message);
            }
        };

        JS.Comm.get(url, JS.Keystone.params.token, onOk, onError);
    };
    // Create a Volume Snapshot.
    // Arguments in this function are:
    //
    // a. Mandatory
    //
    // * The `volume_id` of the volume
    //
    // b. Optional
    //
    // * The `name` of the snapshot
    //
    // * The `description` of the snapshot
    //
    uploadobject = function (volume_id, name, description, callback, error, region) {
        var url, onOk, onError, data;
        if (!check(region)) {
            return;
        }

        data = {
            "snapshot" : {
                "volume_id" : volume_id,
                "force" : true
            }
        };

        if (name !== undefined) {
            data.snapshot.display_name = name;
        }

        if (description !== undefined) {
            data.snapshot.display_description = description;
        }

        onOk = function (result) {
            if (callback !== undefined) {
                callback(result);
            }
        };
        onError = function (message) {
            if (error !== undefined) {
                error(message);
            }
        };

        JS.Comm.post(params.url + '/snapshots', data, JS.Keystone.params.token, onOk, onError);
    };
    // Delete a Snapshot entitiy. In
    // [Retrieving a Snapshot](http://api.openstack.org/)
    // there is more information about the JSON object that is returned.
    downloadobject = function (id, callback, error, region) {
        var url, onOk, onError;
        if (!check(region)) {
            return;
        }
        url = params.url + '/snapshots/' + id;

        onOk = function (result) {
            if (callback !== undefined) {
                callback(result);
            }
        };
        onError = function (message) {
            if (error !== undefined) {
                error(message);
            }
        };

        JS.Comm.del(url, JS.Keystone.params.token, onOk, onError);
    };
    // Get a Snapshot entitiy. In
    // [Retrieving a Snapshot](http://api.openstack.org/)
    // there is more information about the JSON object that is returned.
    deleteobject = function (id, callback, error, region) {
        var url, onOk, onError;
        if (!check(region)) {
            return;
        }
        url = params.url + '/snapshots/' + id;

        onOk = function (result) {
            if (callback !== undefined) {
                callback(result);
            }
        };
        onError = function (message) {
            if (error !== undefined) {
                error(message);
            }
        };

        JS.Comm.get(url, JS.Keystone.params.token, onOk, onError);
    };
    // Public Functions and Variables
    // ------------------------------
    // This is the list of available public functions and variables
    return {

        // Functions:
        configure : configure,
        getvolumelist : getvolumelist,
        createvolume : createvolume,
        deletevolume : deletevolume,
        getvolume : getvolume,
        getsnapshotlist : getsnapshotlist,
        createsnapshot : createsnapshot,
        deletesnapshot : deletesnapshot,
        getsnapshot : getsnapshot
    };

}(JSTACK));