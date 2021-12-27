/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/tspence/lockstep-sdk-typescript
 */

import { LockstepApi } from "../APIClient.js";
import { ErrorResult } from "../models/ErrorResult.js";
import { CustomFieldDefinitionModel } from "../models/DataModels.js";
import { FetchResult } from "../models/FetchResult.js";

export class CustomFieldDefinitionsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Custom Field Definition specified by this unique identifier.
   * 
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param id - The unique Lockstep Platform ID number of this Custom Field Definition
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No additional data collections are currently defined on this object, but may be supported in the future.
   */
  retrieveFieldDefinition(id: string, include: string): Promise<CustomFieldDefinitionModel | ErrorResult> {
    const url = `/api/v1/CustomFieldDefinitions/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<CustomFieldDefinitionModel>('get', url, options, null);
  }

  /**
   * Updates an existing Custom Field Definition with the information supplied to this PATCH call.
   * 
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   * 
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param id - The unique Lockstep Platform ID number of the Custom Field Definition to update
   * @param body - A list of changes to apply to this Custom Field Definition
   */
  updateFieldDefinition(id: string, body: object): Promise<CustomFieldDefinitionModel | ErrorResult> {
    const url = `/api/v1/CustomFieldDefinitions/${id}`;
    return this.client.request<CustomFieldDefinitionModel>('patch', url, null, body);
  }

  /**
   * Deletes the Custom Field Definition referred to by this unique identifier.
   * 
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param id - The unique Lockstep Platform ID number of the Custom Field Definition to delete
   */
  deleteFieldDefinition(id: string): Promise<CustomFieldDefinitionModel | ErrorResult> {
    const url = `/api/v1/CustomFieldDefinitions/${id}`;
    return this.client.request<CustomFieldDefinitionModel>('delete', url, null, null);
  }

  /**
   * Creates one or more Custom Field Definitions and returns the records as created.  A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param body - The Custom Field Definitions to create
   */
  createFieldDefinitions(body: CustomFieldDefinitionModel[]): Promise<CustomFieldDefinitionModel[] | ErrorResult> {
    const url = `/api/v1/CustomFieldDefinitions`;
    return this.client.request<CustomFieldDefinitionModel[]>('post', url, null, body);
  }

  /**
   * Queries Custom Field Definitions within the Lockstep platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   * 
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No additional data collections are currently defined on this object, but may be supported in the future.
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryFieldDefinitions(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<FetchResult<CustomFieldDefinitionModel> | ErrorResult> {
    const url = `/api/v1/CustomFieldDefinitions/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<CustomFieldDefinitionModel>>('get', url, options, null);
  }
}