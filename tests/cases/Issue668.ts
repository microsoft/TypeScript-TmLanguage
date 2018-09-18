class c {
	readonly options: string[] = _.map(this.objects, 'name').
	  concat('Blob', 'Time', 'String', 'Boolean', 'Date', 'Datetime', 'Decimal', 'Double', 'ID', 'Integer', 'Long', 'Object')
}