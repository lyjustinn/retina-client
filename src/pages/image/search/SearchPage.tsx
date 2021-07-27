import React from 'react';
import Layout from '../../../components/layout/Layout';
import { match, RouteComponentProps } from 'react-router';
import SearchResults from '../../../components/image/SearchResults';

interface MatchParams {
    query: string
}

interface SearchPageProps extends RouteComponentProps<MatchParams> {
    match: match<MatchParams>
}

const SearchPage: React.FC<SearchPageProps> = ({match}) => {
    return (<Layout param="" user={null}>
        <SearchResults query={match.params.query}/>
    </Layout>);
}
export default SearchPage;