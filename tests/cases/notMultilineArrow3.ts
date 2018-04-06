const modifiersRelated = relation === comparableRelation || (
                    relation === identityRelation ? getMappedTypeModifiers(source) === getMappedTypeModifiers(target) :
                        getCombinedMappedTypeOptionality(source) <= getCombinedMappedTypeOptionality(target));