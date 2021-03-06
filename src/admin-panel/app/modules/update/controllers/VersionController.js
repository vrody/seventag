/**
 * Copyright (C) 2015 Digimedia Sp. z.o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distrubuted in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @type {UpdateResource}
 */
let updateResource;

/**
 * @type {$window}
 */
let window;

/**
 * @name update#VersionController
 */
class VersionController {

    /**
     * @param {UpdateResource} $updateResource
     * @param {$window} $window
     * @param {Version} version
     */
    constructor ($updateResource, $window, version) {

        updateResource = $updateResource;
        window = $window;
        this.version = version;

    }

    updateAvailable () {

        return this.version.latest !== undefined && !this.version.isUpToDate();

    }

    startUpdate () {

        updateResource.setSession().then((resp) => {

            window.location.href = resp.url;

        });

    }

}

export default VersionController;
