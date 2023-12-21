import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import certificates from '$lib/data/certificates.json';
import type { Certificate } from '$lib/model/Certificate';

export const load: PageLoad = ({ params }): Certificate => {
    const certificate = certificates.find(certificate => certificate.id == parseInt(params.slug));
    if (certificate) {
        return certificate;
    }

    error(404, 'Not Found');
}