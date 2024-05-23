import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {
    updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {

    const { updateReloadState } = props;
    const [fullUrl, setfullUrl] = React.useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        try {
            await axios.post(`${serverUrl}/shorturl`, {
                fullUrl: fullUrl
            });
            setfullUrl("");
            updateReloadState();
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <div className='container mx-auto p-2'>
            <div className='bg-banner my-8 rounded-xl bg-cover bg-center'>

                <div className='w-full h-full rounded-xl p-20 backdrop-brightness-100'>
                    <h2 className='text-white text-4xl text-center pb-4'>Paste your untidy link here.</h2>

                    <p className='text-white text-center pb-2 text-xl font-extralight'>
                    Free tool to shorten a url or reduce link,
                        use our URL shortener to create a shortened
                        & neat link making it easy to use. 
                    </p>

                    <p className='text-white text-center pb-4 text-sm font-thin'>
                        
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className='flex'>
                            <div className='relative w-full'>
                                <input type="text"
                                    placeholder='Add your link'
                                    required
                                    className='block w-full p-4 ps-8 text-sm
                                     text-gray-900 border border-gray-300 rounded-[33rem]
                                      bg-white focus:ring-blue-500 focus:border-blue-500'
                                    value={fullUrl}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        setfullUrl(e.target.value)
                                    }
                                />
                                <button type='submit' className='absolute top-0 end-0 p-4 text-sm 
                                font-medium h-full text-white bg-blue-700 rounded-[33rem] border
                                 border-blue-700 focus:ring-4 focus:outline-none 
                                 focus:ring-blue-300'>Shorten Url</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
