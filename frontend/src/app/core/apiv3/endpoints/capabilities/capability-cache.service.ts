//-- copyright
// OpenProject is an open source project management software.
// Copyright (C) 2012-2021 the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See docs/COPYRIGHT.rdoc for more details.
//++

import { CapabilityResource } from "core-app/features/hal/resources/capability-resource";
import { InjectField } from "core-app/shared/helpers/angular/inject-field.decorator";
import { SchemaCacheService } from "core-app/core/schemas/schema-cache.service";
import { States } from "core-app/core/states/states.service";
import { Injector } from "@angular/core";
import { StateCacheService } from "core-app/core/apiv3/cache/state-cache.service";
import { MultiInputState } from "reactivestates";

export class CapabilityCacheService extends StateCacheService<CapabilityResource> {
  @InjectField() readonly states:States;

  constructor(readonly injector:Injector, state:MultiInputState<CapabilityResource>) {
    super(state);
  }

  updateValue(id:string, val:CapabilityResource):Promise<CapabilityResource> {
    this.putValue(id, val);
    return Promise.resolve(val);
  }
}
