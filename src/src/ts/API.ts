export class API
{

	public getUser()
	{

	}

	public post( url: string, data: any, onSuccess : () => void, onFail : () => void)
	{
		let csrf = (document.getElementsByName('csrfmiddlewaretoken')[0] as HTMLInputElement).value;
		
		fetch(url, {
		   method: 'POST',
		   body: data,
		   headers: { 'X-CSRFToken' : csrf }
		})
		  .then(response => response.json() )
		  .then(res => res.success ? onSuccess(): onFail());
		  
	}

	public get( url: string, onResponse : ( data ) => void )
	{
		fetch(url)
		  .then(response => response.json() )
		  .then(data => onResponse( data ));

	}

}