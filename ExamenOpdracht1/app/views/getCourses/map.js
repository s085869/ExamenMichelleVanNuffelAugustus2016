function(doc) 
{ 
	if(doc.type == 'gerecht')
		emit(doc.name);
};