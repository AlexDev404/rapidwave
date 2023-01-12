import { http_host, API_BASE } from '$lib/xs/config.json';
import { toast } from '@zerodevx/svelte-toast';

/**
 * @param {any} person
 */
export async function setUser(person) {
	fetch(`${http_host}${API_BASE}user/${person}`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		method: 'POST'
	})
		.then((res) => {
			if (res.status != 200) {
				return toast.push(
					'Hrmm..We could not fetch your userdata properly. Try logging in again.',
					{
						dismissable: false,
						theme: {
							'--toastBarBackground': 'red'
						}
					}
				);
			}
			return res.json();
		})
		.then(async function (json) {
			await localStorage.setItem('userData', JSON.stringify(json));
		})
		.catch(function (res) {
			console.log(res);
		});
}
