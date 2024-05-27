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
            <div className="bg-[url('/src/assets/bkkrag.jpg')] my-8 rounded-xl bg-cover bg-center">

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
                                    placeholder='Add your link...'
                                    required
                                    className='block w-full p-[10px] xs:p-4 ps-1 lg:ps-6 text-sm 
                                     text-gray-900 border focus:ring-blue-500 rounded-[1rem]
                                      bg-white focus:border-blue-500 border-gray-300 '
                                    value={fullUrl}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        setfullUrl(e.target.value)
                                    }
                                />
                                <button type='submit' className='absolute top-0 end-0 px-3 py-3 
                                text-sm xs:px-8 xs:py-4 
                                font-medium h-full text-white bg-blue-700 rounded-[1rem]
                                 hover:bg-blue-800 focus:pb-[1px] '>
                                    Click
                                    </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
