
   class ConstrainedBasedObjectcolection<T extends Core.Model.DataEntity>
     {
          public GetState(): { [index : string]: string } 
          {
              if (this.ShouldFilter())
                  return { fpn: this.CurrentFilter().PropertyOfDefinition.DisplayName, fpv: this.CuttrentFilter().FilterValue }
              return {};
          }

          public CurrentFilter: knockoutObservable<CollectionFilter<any>> = ko.observable<CollectionFilter<any>>();

     }
 


